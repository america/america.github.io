import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export function ReactionButton({ slug, reaction = 'like' }) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // 現在のcount取得
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('reactions')
        .select('count')
        .eq('slug', slug)
        .eq('reaction', reaction)
        .maybeSingle();

      setCount(data?.count ?? 0);
    };

    load();
  }, [slug, reaction]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    const { data, error } = await supabase.rpc('increment_reaction', {
      p_slug: slug,
      p_reaction: reaction,
    });

    setLoading(false);
    if (error) return console.error(error);
    setCount(data.count);
  };

  return (
    <button className="reaction-button" onClick={handleClick} disabled={loading}>
      👍 {count ?? '…'}
    </button>
  );
}
