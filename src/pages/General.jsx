import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const General = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">General Discussions</h2>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the General Discussion Area</CardTitle>
          <CardDescription>This is the place for all general tech-related conversations.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Feel free to start discussions about any tech topic that doesn't fit into the more specific categories.</p>
        </CardContent>
      </Card>
      {/* Add more content or thread list here */}
    </div>
  );
};

export default General;