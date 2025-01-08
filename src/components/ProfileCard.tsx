import React from 'react';
import { Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react';
import type { ProfileCardProps } from '../types';

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-32 bg-gradient-to-r from-purple-500 to-indigo-600">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>
      
      <div className="pt-16 p-6">
        <h3 className="text-xl font-bold text-center text-gray-900">{profile.name}</h3>
        <p className="text-sm text-center text-indigo-600 font-medium mt-1">{profile.role}</p>
        
        <div className="mt-4">
          <p className="text-gray-600 text-sm leading-relaxed">{profile.bio}</p>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {profile.socials.twitter && (
            <a href={profile.socials.twitter} className="text-gray-600 hover:text-blue-400">
              <Twitter size={20} />
            </a>
          )}
          {profile.socials.github && (
            <a href={profile.socials.github} className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} className="text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
          )}
          {profile.socials.website && (
            <a href={profile.socials.website} className="text-gray-600 hover:text-purple-600">
              <Globe size={20} />
            </a>
          )}
        </div>

        <div className="mt-6">
          <a
            href={profile.contactLink}
            className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-lg font-medium transition-colors"
          >
            <Mail className="inline-block mr-2 h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}