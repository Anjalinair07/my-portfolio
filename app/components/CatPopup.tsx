'use client';

import { useEffect, useState } from 'react';

export default function RocketPopup() {
  const [stage, setStage] = useState<'countdown' | 'launch' | 'done'>('countdown');
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    if (stage === 'countdown') {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setStage('launch');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }

    if (stage === 'launch') {
      const timer = setTimeout(() => setStage('done'), 2200);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === 'done') {
    return null;
  }

  return (
    <div className={`rocket-launch-overlay rocket-stage-${stage}`}>
      <div className="rocket-ship">🚀</div>
      <div className="rocket-fire" />
      <div className="rocket-countdown" aria-live="polite">
        {stage === 'countdown' ? count : 'GO!'}
      </div>
    </div>
  );
}
