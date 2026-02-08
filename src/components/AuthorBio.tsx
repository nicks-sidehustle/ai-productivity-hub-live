import { getAuthorByName, Author } from '@/data/authors';

interface AuthorBioProps {
  authorName: string;
}

export default function AuthorBio({ authorName }: AuthorBioProps) {
  const author = getAuthorByName(authorName);
  
  if (!author) {
    return null;
  }

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {author.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-text">{author.name}</h3>
            <span className="text-sm text-text-muted">·</span>
            <span className="text-sm text-accent">{author.role}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{author.bio}</p>
          <div className="mt-3 flex gap-3">
            {author.twitter && (
              <a 
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                @{author.twitter}
              </a>
            )}
            {author.linkedin && (
              <a 
                href={`https://linkedin.com/in/${author.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
