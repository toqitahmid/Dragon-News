import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const MobileViewSocialPage = () => {
  return (
    <div className="sm:col-span-3">
      <div className="flex gap-1 justify-center">
        <Button className="size-5" variant="tertiary">
          <Icon icon="devicon:google" />
        </Button>
        <Button className="size-5" variant="tertiary">
          <Icon icon="mdi:github" />
        </Button>
      </div>
    </div>
  );
};

export default MobileViewSocialPage;
