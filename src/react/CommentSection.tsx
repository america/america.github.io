import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

type Comment = {
  id: string;
  author_name: string | null;
  body: string;
  created_at: string;
};

export function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [body, setBody] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const load = async () => {
    const { data } = await supabase
      .from('comments')
      .select('id, author_name, body, created_at')
      .eq('slug', slug)
      .eq('approved', true)
      .order('created_at', { ascending: true });

    setComments(data ?? []);
  };

  useEffect(() => {
    load();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ハニーポット: botが埋めがちな隠しフィールドに値が入っていたら黙って無視する
    if (honeypot) {
      setStatus('sent');
      setBody('');
      return;
    }

    if (!body.trim()) return;

    setSubmitting(true);
    const { error } = await supabase.from('comments').insert({
      slug,
      author_name: authorName.trim() || null,
      body: body.trim(),
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      setStatus('error');
      return;
    }

    setBody('');
    setStatus('sent');
  };

  return (
    <div className="comment-section">
      <h3 className="comment-heading">コメント{comments.length > 0 ? ` (${comments.length})` : ''}</h3>

      {comments.length > 0 && (
        <ul className="comment-list">
          {comments.map((c: Comment) => (
            <li key={c.id} className="comment-item">
              <div className="comment-meta">
                <span className="comment-author">{c.author_name || '名無しさん'}</span>
                <span className="comment-date">
                  {new Date(c.created_at).toLocaleDateString('ja-JP')}
                </span>
              </div>
              <p className="comment-body">{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={authorName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthorName(e.target.value)}
          placeholder="お名前(空欄可)"
          className="comment-input"
          maxLength={50}
        />

        {/* ハニーポット: 画面上は見えないがbotには見える。人間には触らせない */}
        <input
          type="text"
          value={honeypot}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value)}
          className="comment-honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <textarea
          value={body}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
          placeholder="コメントを書く"
          className="comment-textarea"
          rows={4}
          maxLength={1000}
          required
        />

        <button type="submit" className="comment-submit" disabled={submitting || !body.trim()}>
          {submitting ? '送信中…' : 'コメントを送信'}
        </button>

        {status === 'sent' && (
          <p className="comment-status">送信しました。確認後に表示されます。</p>
        )}
        {status === 'error' && (
          <p className="comment-status comment-status-error">送信に失敗しました。時間をおいて再度お試しください。</p>
        )}
      </form>
    </div>
  );
}
