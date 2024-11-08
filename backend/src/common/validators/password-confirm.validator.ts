import {
	registerDecorator,
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';

export function PasswordConfirm(
	property: string,
	validationOptions?: ValidationOptions,
) {
	return (object: any, propertyName: string) => {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [property],
			validator: MatchConstraint,
		});
	};
}

@ValidatorConstraint({ name: 'PasswordConfirm' })
export class MatchConstraint implements ValidatorConstraintInterface {
	validate(value: any, args: ValidationArguments) {
		const [relatedPropertyName] = args.constraints;
		const relatedValue = (args.object as any)[relatedPropertyName];
		return value === relatedValue;
	}
}
