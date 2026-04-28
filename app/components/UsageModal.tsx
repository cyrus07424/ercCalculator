"use client";

import { useState } from "react";
import { modelProcedures, type ModelProcedure } from "../data/modelProcedures";

interface UsageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UsageModal({ isOpen, onClose }: UsageModalProps) {
  const [selected, setSelected] = useState<ModelProcedure>(modelProcedures[0]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="usage-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2
            id="usage-modal-title"
            className="text-xl font-bold text-gray-800"
          >
            使い方 — 機種を選択してください
          </h2>
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Model selector */}
        <div className="px-6 py-3 border-b border-gray-200 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {modelProcedures.map((proc) => (
              <button
                key={proc.id}
                onClick={() => setSelected(proc)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selected.id === proc.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {proc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto flex-1">
          <p className="text-sm text-gray-500 mb-1">
            {selected.models.length > 0
              ? `対応機種：${selected.models.join("、")}`
              : "機種共通の汎用手順"}
          </p>
          <p className="text-sm text-gray-600 mb-4">{selected.description}</p>

          <ol className="space-y-3">
            {selected.steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-700 pt-0.5">{step.text}</span>
              </li>
            ))}
          </ol>

          {selected.notes && selected.notes.length > 0 && (
            <div className="mt-5 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs font-semibold text-yellow-800 mb-1">注意事項</p>
              <ul className="space-y-1">
                {selected.notes.map((note, i) => (
                  <li key={i} className="text-xs text-yellow-700">
                    ・{note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
