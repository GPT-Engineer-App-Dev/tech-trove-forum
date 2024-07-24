import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 py-4 px-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2024 Tech Forum. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};