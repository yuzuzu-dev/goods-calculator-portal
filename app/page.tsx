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
    <main className="min-h-screen bg-[#E5F0FF] px-4 py-10">
      <div className="mx-auto max-w-xl">
        <p className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
          GOODS CALCULATOR
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          グッズ計算アプリ一覧
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          参加予定のイベントを選んでください。
        </p>

        <div className="mt-6 space-y-3">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.url}
              className="block rounded-md border border-[#D6C3E7] bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    {event.title}
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    {event.description}
                  </p>
                </div>

                {event.status === "closed" && (
                  <span className="rounded-full bg-gray-200 px-2 py-1 text-[10px] font-bold text-gray-500">
                    終了
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-[10px] text-gray-400">
          © 2026 グッズ計算アプリ
        </p>
      </div>
    </main>
  );
}