import { Input, ArrayField } from 'informed';

import CircuitForm from '../CircuitForm/';

import { CIRCUIT_GROUP_FIELDS } from '../../helpers/constants';

import classes from './circuitGroup.module.css';

const CircuitGroup = () => {
    const inputs = CIRCUIT_GROUP_FIELDS.map(field => (
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
            <ArrayField name="różnicówka">
                {({ add }) => {
                    return (
                        <>
                            <ArrayField.Items>
                                {({ remove, name }) => (
                                    <div className={classes.group}>
                                        <label>
                                            <h5>{name}</h5>
                                            {inputs}
                                            <CircuitForm />
                                            <button
                                                type="button"
                                                onClick={remove}
                                            >
                                                Usuń różnicówkę
                                            </button>
                                        </label>
                                    </div>
                                )}
                            </ArrayField.Items>
                            <button onClick={add} type="button">
                                Dodaj kolejną różnicówkę
                            </button>
                        </>
                    );
                }}
            </ArrayField>{' '}
        </div>
    );
};

export default CircuitGroup;
