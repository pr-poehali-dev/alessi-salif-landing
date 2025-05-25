import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-alessi-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-alessi-dark via-gray-800 to-alessi-dark flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-alessi-gold/5 to-transparent"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-russo text-alessi-white mb-6 leading-tight">
                ALESSI
                <br />
                <span className="text-alessi-gold animate-pulse-gold">
                  SALIF
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-noto leading-relaxed">
                Культовая соковыжималка от Philippe Starck.
                <br />
                <span className="text-alessi-gold">Шедевр дизайна</span> в вашей
                кухне.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn-gold text-lg">
                  КУПИТЬ СЕЙЧАС • ₽24,990
                </button>
                <button className="btn-gold-outline">УЗНАТЬ БОЛЬШЕ</button>
              </div>

              {/* Urgency Timer */}
              <div className="bg-red-600 text-white px-6 py-4 rounded-lg inline-block animate-pulse">
                <p className="font-bold mb-2">
                  🔥 СПЕЦИАЛЬНАЯ ЦЕНА ИСТЕКАЕТ ЧЕРЕЗ:
                </p>
                <div className="flex gap-4 text-2xl font-russo">
                  <div className="text-center">
                    <div className="bg-alessi-dark px-3 py-2 rounded">
                      {timeLeft.hours}
                    </div>
                    <div className="text-xs">ЧАСОВ</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-alessi-dark px-3 py-2 rounded">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-xs">МИНУТ</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-alessi-dark px-3 py-2 rounded">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-xs">СЕКУНД</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-alessi-gold rounded-full absolute -inset-4 opacity-20 animate-float"></div>
                <img
                  src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=600&h=600&fit=crop&crop=center"
                  alt="Alessi Salif"
                  className="w-72 h-72 object-cover rounded-full border-4 border-alessi-gold shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-alessi-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-russo text-alessi-dark text-center mb-16">
            ПОЧЕМУ <span className="text-alessi-gold">ALESSI SALIF?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-2xl font-russo text-alessi-dark mb-4">
                ДИЗАЙН-ИКОНА
              </h3>
              <p className="text-gray-600 font-noto leading-relaxed">
                Создана Philippe Starck в 1990 году. Находится в коллекциях MoMA
                и других ведущих музеев мира.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-russo text-alessi-dark mb-4">
                ФУНКЦИОНАЛЬНОСТЬ
              </h3>
              <p className="text-gray-600 font-noto leading-relaxed">
                Эргономичная форма и продуманные детали обеспечивают удобство
                использования каждый день.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-russo text-alessi-dark mb-4">
                ПРЕМИУМ КАЧЕСТВО
              </h3>
              <p className="text-gray-600 font-noto leading-relaxed">
                Литой алюминий высочайшего качества. Каждая деталь отполирована
                вручную итальянскими мастерами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-alessi-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-russo text-alessi-white text-center mb-16">
            ПРИЗНАНИЕ <span className="text-alessi-gold">ЭКСПЕРТОВ</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-alessi-gold text-4xl mb-4">★★★★★</div>
              <p className="text-gray-300 mb-6 italic font-noto">
                "Salif - это не просто соковыжималка, это произведение
                искусства, которое преображает любую кухню."
              </p>
              <div className="text-alessi-gold font-bold">— Vogue Home</div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-alessi-gold text-4xl mb-4">🏆</div>
              <p className="text-gray-300 mb-6 italic font-noto">
                "Один из самых влиятельных дизайнерских объектов XX века.
                Обязательная вещь для любителей дизайна."
              </p>
              <div className="text-alessi-gold font-bold">
                — Design Museum London
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-alessi-gold text-4xl mb-4">★★★★★</div>
              <p className="text-gray-300 mb-6 italic font-noto">
                "Купил 5 лет назад - до сих пор восхищаюсь каждый день. Гости
                всегда спрашивают, где приобрести."
              </p>
              <div className="text-alessi-gold font-bold">
                — Алексей М., Москва
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-alessi-gold to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-russo text-alessi-dark mb-8">
            ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ
          </h2>

          <div className="bg-alessi-white p-10 rounded-2xl shadow-2xl max-w-lg mx-auto">
            <div className="text-red-600 font-bold text-xl mb-4">
              🔥 ТОЛЬКО 24 ЧАСА!
            </div>

            <div className="text-6xl font-russo text-alessi-dark mb-4">
              ₽24,990
            </div>
            <div className="text-gray-500 line-through text-2xl mb-6">
              ₽34,990
            </div>

            <div className="text-green-600 font-bold text-xl mb-6">
              ЭКОНОМИЯ ₽10,000!
            </div>

            <button className="btn-gold w-full text-xl mb-6">
              ЗАКАЗАТЬ СЕЙЧАС
            </button>

            <div className="text-sm text-gray-600 space-y-2">
              <div>✅ Бесплатная доставка по России</div>
              <div>✅ Гарантия 2 года</div>
              <div>✅ Возврат в течение 30 дней</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
