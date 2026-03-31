import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Card
        className="w-full h-12 items-center justify-center shadow-none bg-transparent rounded-none p-0 border-0"
      >
        <Typography className="w-full font-normal text-gray-500 dark:text-white">
          {children}
        </Typography>
      </Card>
    </div>
  );
}

export default ResumeItem;
