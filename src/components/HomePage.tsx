import React from 'react';
import { ProfileCard } from './ProfileCard';
import type { Profile } from '../types';

const profiles: Profile[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
      bio: 'Founder of TechStart.io. Previously engineering lead at Google. Passionate about helping startups scale their engineering teams.',
      role: 'Tech Founder',
      skills: ['Engineering Leadership', 'Startup Scaling', 'Full-Stack Development'],
      contactLink: 'mailto:example@email.com',
      socials: {
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        website: 'https://example.com',
      },
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
      bio: 'UI/UX Designer specializing in product design for early-stage startups. Building design systems that scale.',
      role: 'Product Designer',
      skills: ['UI/UX', 'Design Systems', 'Product Strategy'],
      contactLink: 'mailto:example2@email.com',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        website: 'https://example.com',
      },
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Founders Eden Network</h1>
          <p className="mt-2 text-gray-600">Connect with amazing founders, developers, and designers</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
