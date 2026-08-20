export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  readingTime: string;
  content: string;
  status?: "draft" | "publish";
}
