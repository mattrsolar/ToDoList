import Text from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/trash.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";


function App() {

  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          HELLLO
        </Text>
        <Text variant="body-sm-bold" className="text-pink-base">

        </Text> 

      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base"/>
        <Icon svg={SpinnerIcon} animate/>
      </div>
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">5 de 10</Badge>

      </div>
      <div>
        <Button icon={PlusIcon}>New Task</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="primary"/>
      </div>
    </div>
    
  );
}

export default App;
