"use client";

import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { FormField, Input, Textarea, Select } from "@/components/ui/FormField";
import { useCheckoutStore } from "@/lib/store/checkoutStore";
import { contactSchema } from "@/lib/checkoutSchema";
import { ALL_STATES } from "@/lib/checkoutMarkets";
import type { SiteConfig } from "@/lib/config";

// Flat, permissive shape for the form itself (covers both schema branches);
// the actual branch-specific validation happens via zodResolver(schema)
// below, which picks the correct discriminated-union member from config.
interface FormValues {
  shippingRequired: boolean;
  firstName: string;
  lastName: string;
  title?: string;
  company: string;
  email: string;
  phone: string;
  notes?: string;
  plaqueStreet?: string;
  plaqueCity?: string;
  plaqueState?: string;
  plaqueZip?: string;
}

export default function Step2ContactInfo({ config }: { config: SiteConfig }) {
  const contact = useCheckoutStore((s) => s.contact);
  const plaqueShipping = useCheckoutStore((s) => s.plaqueShipping);
  const setContact = useCheckoutStore((s) => s.setContact);
  const setPlaqueShipping = useCheckoutStore((s) => s.setPlaqueShipping);
  const goNext = useCheckoutStore((s) => s.goNext);
  const goBack = useCheckoutStore((s) => s.goBack);

  // topphysiatrists always ships a plaque (config.shippingRequired is always
  // true for this site), so lib/checkoutSchema.ts only defines a single
  // always-with-shipping contact schema — there's no "without shipping"
  // branch to select here, unlike the generic mockup pattern.
  const schema = contactSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: {
      shippingRequired: config.shippingRequired,
      ...contact,
      ...(config.shippingRequired
        ? {
            plaqueStreet: plaqueShipping?.street ?? "",
            plaqueCity: plaqueShipping?.city ?? "",
            plaqueState: plaqueShipping?.state ?? "",
            plaqueZip: plaqueShipping?.zip ?? "",
          }
        : {}),
    } as FormValues,
  });

  function onSubmit(values: FormValues) {
    setContact({
      firstName: values.firstName,
      lastName: values.lastName,
      title: values.title ?? "",
      company: values.company,
      email: values.email,
      phone: values.phone,
      notes: values.notes ?? "",
    });

    if (config.shippingRequired) {
      setPlaqueShipping({
        street: values.plaqueStreet ?? "",
        city: values.plaqueCity ?? "",
        state: values.plaqueState ?? "",
        zip: values.plaqueZip ?? "",
      });
    }
    goNext();
  }

  const errs = errors as Record<string, { message?: string } | undefined>;

  return (
    <FadeIn>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="First Name" required error={errs.firstName?.message}>
              <Input {...register("firstName")} error={errs.firstName?.message} />
            </FormField>
            <FormField label="Last Name" required error={errs.lastName?.message}>
              <Input {...register("lastName")} error={errs.lastName?.message} />
            </FormField>
            <FormField label="Title / Role" error={errs.title?.message}>
              <Input {...register("title")} error={errs.title?.message} />
            </FormField>
            <FormField label="Company" required error={errs.company?.message}>
              <Input {...register("company")} error={errs.company?.message} />
            </FormField>
            <FormField label="Email Address" required error={errs.email?.message}>
              <Input type="email" {...register("email")} error={errs.email?.message} />
            </FormField>
            <FormField label="Phone Number" required error={errs.phone?.message}>
              <Input type="tel" {...register("phone")} error={errs.phone?.message} />
            </FormField>
          </div>
          <div className="mt-4">
            <FormField label="Notes / Special Instructions" error={errs.notes?.message}>
              <Textarea {...register("notes")} error={errs.notes?.message} />
            </FormField>
          </div>
        </div>

        {config.shippingRequired && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-1">Shipping Address</h2>
            <p className="text-sm text-muted mb-4">
              Only shown for sites that offer an award plaque.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Street"
                required
                className="sm:col-span-2"
                error={errs.plaqueStreet?.message}
              >
                <Input {...register("plaqueStreet")} error={errs.plaqueStreet?.message} />
              </FormField>
              <FormField label="City" required error={errs.plaqueCity?.message}>
                <Input {...register("plaqueCity")} error={errs.plaqueCity?.message} />
              </FormField>
              <FormField label="State" required error={errs.plaqueState?.message}>
                <Select {...register("plaqueState")} error={errs.plaqueState?.message}>
                  <option value="">Select…</option>
                  {ALL_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="ZIP Code" required error={errs.plaqueZip?.message}>
                <Input {...register("plaqueZip")} error={errs.plaqueZip?.message} />
              </FormField>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <Button type="button" variant="ghost" onClick={goBack}>
            Back
          </Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </FadeIn>
  );
}
