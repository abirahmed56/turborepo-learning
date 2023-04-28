import { Button } from "ui";
import Cart from "core/component/Cart";
import { Provider } from "react-redux";
import store from "core/store";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Provider store={store}>
          <Cart />
      </Provider>
      
      <Button />
    </div>
  );
}
