import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

interface TrajectoryItemProps {
  logoUrl: string;
  altText: string;
  title: string;
  organization: string;
  date?: string;
  location?: string;
  duration?: string;
  description: string;
}

export function TrajectoryItem({
  logoUrl,
  altText,
  title,
  organization,
  date,
  location,
  duration,
  description,
}: TrajectoryItemProps) {
  return (
    <Item variant="outline" className="flex flex-row items-start gap-4 p-4 text-left">
      <ItemMedia variant="image">
        <img src={logoUrl} alt={altText} className="object-contain" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-lg font-bold">{title}</ItemTitle>
        <ItemDescription className="flex flex-col gap-2 mt-1">
          <span className="text-primary">{organization}</span>
          
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {date}
              </span>
            )}
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {location}
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {duration}
              </span>
            )}
          </span>

          <span className="text-sm">{description}</span>
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}