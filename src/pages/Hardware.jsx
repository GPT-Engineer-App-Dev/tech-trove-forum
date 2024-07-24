import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Hardware = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Hardware Discussions</h2>
      <Card>
        <CardHeader>
          <CardTitle>Hardware Talk</CardTitle>
          <CardDescription>Discuss all things related to computer hardware.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>From CPUs and GPUs to peripherals and custom builds, this is the place to talk about hardware.</p>
        </CardContent>
      </Card>
      {/* Add more content or thread list here */}
    </div>
  );
};

export default Hardware;