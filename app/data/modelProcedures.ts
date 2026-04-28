export interface Step {
  text: string;
}

export interface ModelProcedure {
  id: string;
  name: string;
  models: string[];
  description: string;
  steps: Step[];
  notes?: string[];
}

export const modelProcedures: ModelProcedure[] = [
  {
    id: "generic",
    name: "汎用（一般的な手順）",
    models: [],
    description: "多くのトヨタ・レクサス純正ナビに対応した一般的な手順です。",
    steps: [
      { text: "車のエンジンをかけずにACCまたはIGをONにします" },
      { text: "ナビのメインボタン（MENUまたはMAPボタン）を長押ししながら、パーキングライト（スモールランプ）を3〜4回ON/OFFします" },
      { text: "サービスモード（診断モード）画面が表示されます" },
      { text: "「ERC」または「セキュリティ」メニューを選択します" },
      { text: "画面に表示される16桁のERCコードをこのサイトに入力して計算します" },
      { text: "計算されたロック解除コードをナビに入力します" },
    ],
    notes: [
      "機種によっては手順が異なる場合があります",
      "サービスモードへの操作は自己責任で行ってください",
    ],
  },
  {
    id: "nhdt-nhdn",
    name: "NHDT / NHDN 系",
    models: ["NHDT-W57", "NHDT-W58", "NHDN-W56G", "NHDN-W57G", "NHDN-W58G"],
    description: "NHDT・NHDN系の旧型モデルに対応した手順です。",
    steps: [
      { text: "パーキングブレーキをかけます" },
      { text: "イグニッション（ACC）をONにしてナビを起動します" },
      { text: "ナビの「MENU」ボタン（または「MAP」ボタン）を長押しし続けます" },
      { text: "そのまま車のパーキングライト（スモールランプ）スイッチを3回ON/OFFします（各操作は1秒以内）" },
      { text: "「TEST MODE」または「ERC SERVICE MODE」画面が表示されます" },
      { text: "画面に表示される16桁のERCコードをこのサイトに入力して計算します" },
      { text: "計算されたロック解除コードをナビに入力します" },
    ],
    notes: [
      "ボタン長押しとパーキングライト操作は同時並行で行ってください",
      "操作間隔が長すぎると入れない場合があります",
    ],
  },
  {
    id: "nhzt",
    name: "NHZT 系",
    models: ["NHZT-W58G", "NHZT-W59G", "NHZN-W60G", "NHZN-W61G", "NHZN-W62G"],
    description: "NHZT・NHZN系モデルに対応した手順です。",
    steps: [
      { text: "イグニッション（ACC）をONにしてナビを起動します" },
      { text: "「INFO」または「MENU」ボタンを長押しします" },
      { text: "長押ししたまま、ヘッドライト（またはパーキングライト）を3回ON/OFFします" },
      { text: "サービスメニュー（診断メニュー）が表示されます" },
      { text: "「Security」または「ERC入力」を選択します" },
      { text: "画面に表示される16桁のERCコードをこのサイトに入力して計算します" },
      { text: "計算されたロック解除コードをナビに入力します" },
    ],
    notes: [
      "NHZN-W61G では「MENU」と「MAP」ボタン同時長押し＋ライト操作の組み合わせが必要な場合があります",
    ],
  },
  {
    id: "nszt-nszn",
    name: "NSZT / NSZN 系",
    models: [
      "NSZT-W62G", "NSZT-W64T", "NSZT-W66T", "NSZT-Y66T",
      "NSZN-W64T", "NSZN-W66T", "NSZN-W68T", "NSZN-Z66T",
    ],
    description: "NSZT・NSZN系の比較的新しいモデルに対応した手順です。タッチパネル操作でサービスモードに入ります。",
    steps: [
      { text: "イグニッション（ACC）をONにしてナビを起動します" },
      { text: "「MENU」ボタンを押してメインメニューを表示します" },
      { text: "画面の左上 → 右上 → 左下 → 右下 の順に4隅をタッチし、これを3回繰り返します（合計12回）" },
      { text: "サービスモード（診断モード）画面が表示されます" },
      { text: "「ERC入力」または「セキュリティ」を選択します" },
      { text: "画面に表示される16桁のERCコードをこのサイトに入力して計算します" },
      { text: "計算されたロック解除コードをナビに入力します" },
    ],
    notes: [
      "タッチ操作のタイミングは10秒以内で行ってください",
      "「オーディオOFF」画面で操作する必要がある場合もあります",
      "モデルによっては左上→右下→左上→右下（交互）の操作が必要な場合があります",
    ],
  },
];
