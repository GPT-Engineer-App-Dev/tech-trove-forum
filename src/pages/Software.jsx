import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Software = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Software Discussions</h2>
      <Card>
        <CardHeader>
          <CardTitle>Software Central</CardTitle>
          <CardDescription>Everything related to software development and applications.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Discuss programming languages, development tools, applications, and more in this section.</p>
        </CardContent>
      </Card>
      {/* Add more content or thread list here */}
    </div>
  );
};

export default Software;