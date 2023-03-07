import { Input, ArrayField } from 'informed';

import { CIRCUIT_FIELDS } from '../../helpers/constants';

import classes from './circuitForm.module.css';

const CircuitForm = props => {
    const inputs = CIRCUIT_FIELDS.map(field => (
        <Input
            key={field.name}
            name={field.name}
            label={field.label}
            required={field.required}
            type={field.type ? field.type : null}
        />
    ));

    return (
        <div className={classes.root}>
            <ArrayField name="obwód">
                {({ add }) => {
                    return (
                        <>
                            <ArrayField.Items>
                                {({ remove, name }) => (
                                    <div className={classes.circuit}>
                                        <label>
                                            <h5>{name}</h5>
                                            {inputs}
                                            <button
                                                type="button"
                                                onClick={remove}
                                            >
                                                Usuń obwód
                                            </button>
                                        </label>
                                    </div>
                                )}
                            </ArrayField.Items>
                            <button
                                onClick={() => {
                                    add();
                                }}
                                type="button"
                            >
                                Dodaj kolejny obwód
                            </button>
                        </>
                    );
                }}
            </ArrayField>
        </div>
    );
};

export default CircuitForm;
