import { FieldProps } from 'formik';
import React, { useCallback, useMemo, Fragment, FunctionComponent } from 'react';

import { TranslatedString } from '../../locale';
import { FormField, TextInput } from '../../ui/form';

export interface CreditCardCustomerCodeFieldProps {
    name: string;
}

const CreditCardCustomerCodeField: FunctionComponent<CreditCardCustomerCodeFieldProps> = ({ name }) => {
    const renderInput = useCallback(({ field }: FieldProps) => (
        <TextInput
            { ...field }
            id={ field.name }
        />
    ), []);

    const labelContent = useMemo(() => (
        <Fragment>
            <TranslatedString id="payment.credit_card_customer_code_label" />

            { ' ' }

            <small className="optimizedCheckout-contentSecondary">
                <TranslatedString id="common.optional_text" />
            </small>
        </Fragment>
    ), []);

    return <FormField
        labelContent={ labelContent }
        input={ renderInput }
        name={ name }
    />;
};

export default CreditCardCustomerCodeField;
