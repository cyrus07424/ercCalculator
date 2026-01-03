"use client";

import { useState } from "react";
import { calculateERC } from "./utils/ercCalculator";

export default function Home() {
  const [ercCode, setErcCode] = useState("");
  const [unlockCode, setUnlockCode] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setUnlockCode("");

    try {
      const result = calculateERC(ercCode);
      setUnlockCode(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "計算エラーが発生しました");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setErcCode(value);
    setError("");
    setUnlockCode("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            ERC Calculator
          </h1>
          <p className="text-center text-gray-600 mb-8">
            トヨタ車載機のERCコードからロック解除コードを計算します
          </p>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="erc-input"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ERCコード（16桁）
              </label>
              <input
                id="erc-input"
                type="text"
                value={ercCode}
                onChange={handleInputChange}
                placeholder="例: 66EECE00F2724BA5"
                maxLength={16}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg font-mono"
              />
              <p className="mt-1 text-sm text-gray-500">
                16桁の英数字（0-9, A-F）を入力してください
              </p>
            </div>

            <button
              onClick={handleCalculate}
              disabled={ercCode.length !== 16}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              計算する
            </button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            )}

            {unlockCode && (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  ロック解除コード:
                </h2>
                <p className="text-3xl font-mono font-bold text-green-700">
                  {unlockCode}
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  このコードを車載機に入力してください
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">使い方：</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              <li>車載機のメインボタンを長押ししながら、パーキングライトを3-4回点滅させます</li>
              <li>サービスモードで表示される16桁のERCコードを入力します</li>
              <li>「計算する」ボタンをクリックします</li>
              <li>表示された8桁のロック解除コードを車載機に入力します</li>
            </ol>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-400 mt-8">
        &copy; 2025 <a href="https://github.com/cyrus07424" target="_blank">cyrus</a>
      </footer>
    </div>
  );
}
