export interface Profile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  skills: string[];
  contactLink: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ProfileCardProps {
  profile: Profile;
}