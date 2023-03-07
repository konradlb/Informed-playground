import { Form, Debug } from 'informed';

import CircuitGroup from '../CircuitsGroup/circuitGroup'; // import * as classes from "./form.module.css";

const ProtocolForm = () => {
    const initialValues = {
        obwód: [
            {
                circuitName: 'Gniazdo 1f 16A nr1',
                type: 'C',
                in: 16,
                ia: 160,
                zs: 0.7,
                za: 1.43,
                time: 400
            },
            {
                circuitName: 'Gniazdo 3f 32A nr1',
                type: 'C',
                in: 32,
                ia: 320,
                zs: 0.6,
                za: 0.72,
                time: 400
            }
        ]
    };

    return (
        <Form initialValues={initialValues}>
            <CircuitGroup />

            <button type="submit">Submit</button>
            <Debug values />
        </Form>
    );
};

export default ProtocolForm;
