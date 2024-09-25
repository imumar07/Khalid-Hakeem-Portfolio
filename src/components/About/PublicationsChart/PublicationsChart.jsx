// import React from 'react';

const publicationsData = [
  { category: 'Research & Review Papers (Peer Reviewed)', count: 201 },
  { category: 'Patent (USA)', count: 1 },
  { category: 'Book Chapters', count: 82 },
  { category: 'Text and Edited Books', count: 101 },
  { category: 'Conference Proceedings/Papers', count: 4 },
  { category: 'Editorial', count: 1 },
  { category: 'Others (Foreword about books)', count: 4 },
];

export default function PublicationsChart() {
  // Calculate maximum count for scaling the bars
  const maxCount = Math.max(...publicationsData.map(item => item.count));

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-6">
          Summary of Publications (Updated July 2024)
        </h2>
        
        <div className="space-y-4">
          {publicationsData.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1/4 text-gray-700 dark:text-gray-300">{item.category}</span>
              <div className="relative w-3/4 bg-gray-200 dark:bg-gray-700 h-6 rounded-full">
                <div
                  className="bg-[#111827] h-full rounded-full"
                  style={{ width: `${(item.count / maxCount) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
