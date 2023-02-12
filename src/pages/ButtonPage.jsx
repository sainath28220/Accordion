import { DiApple } from "react-icons/di";
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          <DiApple /> 
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;