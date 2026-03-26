import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import ClipboardIcon from "../assets/icons/clipboardText.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/X.svg?react";

export default function PageComponent() {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            HELLLO
          </Text>
          <Text variant="body-sm-bold" className="text-pink-base"></Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={SpinnerIcon} animate />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">5 de 10</Badge>
          <Badge loading>Loading</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>New Task</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} variant="primary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>
        <div>
          <InputText placeholder="Type your task here" />
        </div>
        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>
        <div>
          <Card size="md">This is a card</Card>
        </div>

        <div>
          <Skeleton className="h-10" />
          <Skeleton className="w-10 h-10" />
        </div>
      </div>
    </Container>
  );
}
