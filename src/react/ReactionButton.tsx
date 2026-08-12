import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const REACTIONS = [
  { key: 'like', emoji: '👍' },
  { key: 'laugh', emoji: '😂' },
  { key: 'sad', emoji: '😢' },
] as const;

type ReactionKey = (typeof REACTIONS)[number]['key'];

export function ReactionButton({ slug }: { slug: string }) {
  const [counts, setCounts] = useState<Record<string, number | null>>({});
  const [loading, setLoading] = useState<ReactionKey | null>(null);

  // 現在のcount取得(この記事のリアクション行をまとめて取得)
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('reactions')
        .select('reaction, count')
        .eq('slug', slug);

      const next: Record<string, number> = {};
      (data ?? []).forEach((row) => {
        next[row.reaction] = row.count;
      });
      setCounts(next);
    };

    load();
  }, [slug]);

  const handleClick = async (reaction: ReactionKey) => {
    if (loading) return;
    setLoading(reaction);

    const { data, error } = await supabase.rpc('increment_reaction', {
      p_slug: slug,
      p_reaction: reaction,
    });

    setLoading(null);
    if (error) return console.error(error);
    setCounts((prev: Record<string, number | null>) => ({ ...prev, [reaction]: data.count }));
  };

  return (
    <div className="reaction-group">
      {REACTIONS.map(({ key, emoji }) => (
        <button
          key={key}
          className="reaction-button"
          onClick={() => handleClick(key)}
          disabled={loading === key}
        >
          {emoji} {counts[key] ?? 0}
        </button>
      ))}
    </div>
  );
}
