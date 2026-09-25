import Image from "next/image";
type EventItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  status: "open" | "closed";
};

const events: EventItem[] = [
  {
    id: "shower-of-heart",
    title: "SHOWER OF HEART",
    description: "～輝く光のプレゼント～",
    url: "https://shower-of-heart-goods.vercel.app",
    status: "open",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-100 bg-[#00489D] px-6 py-4">
        <p className="text-sm font-bold tracking-[0.15em] text-white">
          GOODS CALCULATOR
        </p>
      </header>

      {/* メイン */}
      <main className="flex-1 px-6 py-10 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-xl font-bold text-gray-800">
            Yuzuru Hanyu グッズ計算アプリ
          </h1>

          <p className="mt-2 text-sm text-gray-700">
            グッズ購入参考用の非公式計算アプリです。入力内容はお使いの端末にのみ保存されます。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {events.map((event) => (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                               className="group relative flex aspect-square flex-col items-center justify-center rounded-md border border-[#00489D]/50 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {event.status === "closed" && (
                  <span className="absolute right-2 top-2 rounded-full bg-gray-200 px-2 py-1 text-[10px] font-bold text-gray-500">
                    終了
                  </span>
                )}

                <Image
                  src="/wing02.png"
                  alt=""
                  width={128}
                  height={128}
                  className="h-30 w-30 object-contain"
                />

                <h2 className="mt-2 text-sm font-bold leading-snug text-gray-900">
                  {event.title}
                </h2>

                <p className="mt-1.5 text-[11px] text-gray-500">
                  {event.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white px-6 py-4">
        <div className="mx-auto max-w-3xl text-[12px] leading-relaxed text-gray-500">
          <p>
            表示される金額・個数等は実際の販売価格や在庫状況と異なる場合がありますので、購入前に公式ページにて最新情報をご確認ください。
          </p>
        </div>
      </footer>
    </div>
  );
}