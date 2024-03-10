import { useState, useEffect } from 'react';

// useCalled フックを定義します。
function useCalled() {
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    // コンポーネントがマウントされた時に呼び出されます。
    setCallCount(currentCount => currentCount + 1);
  }, []); // 空の依存配列でマウント時のみ実行

  return callCount;
}

export default useCalled;
