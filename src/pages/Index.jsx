import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, ThumbsUp, Eye } from "lucide-react";

const Index = () => {
  const threads = [
    { id: 1, title: "Best CPU for gaming in 2024", category: "Hardware", replies: 15, likes: 32, views: 120 },
    { id: 2, title: "Troubleshooting network issues", category: "Networking", replies: 8, likes: 12, views: 75 },
    { id: 3, title: "Python vs JavaScript for beginners", category: "Software", replies: 25, likes: 45, views: 200 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Recent Discussions</h2>
        <Button>New Thread</Button>
      </div>
      <div className="relative">
        <Input type="search" placeholder="Search threads..." className="pl-10" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid gap-4">
        {threads.map((thread) => (
          <Card key={thread.id}>
            <CardHeader>
              <CardTitle>{thread.title}</CardTitle>
              <CardDescription>{thread.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {thread.replies} replies
                </span>
                <span className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {thread.likes} likes
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {thread.views} views
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;