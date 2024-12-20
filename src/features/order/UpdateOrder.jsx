import Button from "../../ui/Button.jsx";
import {useFetcher} from "react-router-dom";
import {updateOrder} from "../../services/apiRestaurant.js";

export default function UpdateOrder() {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method='PATCH'>
            <Button type="primary">Prioritize order</Button>
        </fetcher.Form>
    )
}


export async function action({params}){
    const data = { priority: true};
    await updateOrder(params.orderId, data)
    return null;
}