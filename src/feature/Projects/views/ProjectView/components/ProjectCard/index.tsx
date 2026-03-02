import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  param: string;
}

export function ProjectCard({ img, title, desc, param }: ProjectCardProps) {
  return (
    <Link href={`/details/${param}`} target="_blank" className="block">
      <Card color="transparent" shadow={false} className="transform transition-transform duration-300 hover:scale-105 dark:bg-transparent">
        <CardHeader floated={false} className="flex items-center mx-0 mt-0 mb-6 h-40">
          <Image
            quality={100}
            src={img}
            alt={title}
            width={768}
            height={1000}
          />
        </CardHeader>
        <CardBody className="p-0">
          <div
            className="text-blue-gray-900 transition-colors hover:text-gray-800"
          >
            <Typography variant="h5" className="dark:text-white mb-2">
              {title}
            </Typography>
          </div>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ProjectCard;
