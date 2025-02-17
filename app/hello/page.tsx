import React from 'react';

const PrizeCard = ({ sport, amount }) => (
  <div className="bg-yellow-500 rounded-lg p-4 flex flex-col justify-between">
    <h3 className="text-xl font-bold text-gray-900">{sport}</h3>
    <p className="text-red-600 font-bold text-2xl mt-2">
      {new Intl.NumberFormat('en-KE', {
        style: 'decimal',
      }).format(amount)}
    </p>
  </div>
);

const TournamentHero = () => {
  const prizes = [
    { sport: 'Football', amount: 1000000 },
    { sport: 'Pool Table', amount: 250000 },
    { sport: 'Darts', amount: 150000 },
    { sport: 'Volleyball', amount: 50000 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-50 z-0"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Logos */}
        <div className="flex justify-between items-center mb-8">
          <img src="/tournament-logo.png" alt="Tournament Logo" className="h-16 w-auto" />
          <img src="/kenya-logo.png" alt="Parliament of Kenya Logo" className="h-16 w-auto" />
        </div>

        {/* Tournament Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-green-700 text-center mb-4">
          THE KA-WANJIKU TOURNAMENT
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 text-center mb-12">
          SEASON II <span className="text-gray-800">GRAND FINALE</span>
        </h2>

        {/* Event Details */}
        <div className="bg-red-600 text-white p-4 rounded-lg max-w-md mx-auto mb-12">
          <p className="font-bold text-lg">Karuri Pri. School Grounds</p>
          <p className="font-bold text-lg">12th Jan 2025</p>
          <p className="font-bold text-lg">11:00 AM</p>
        </div>

        {/* MP Information */}
        <div className="text-center mb-12">
          <h3 className="bg-yellow-500 text-gray-900 inline-block px-6 py-3 rounded-lg text-2xl font-bold">
            HON. Ka Wanjiku | MP Kiambu
          </h3>
        </div>

        {/* Prize Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {prizes.map((prize) => (
            <PrizeCard 
              key={prize.sport} 
              sport={prize.sport} 
              amount={prize.amount} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentHero;