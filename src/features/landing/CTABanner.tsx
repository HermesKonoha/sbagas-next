export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div
    className="
      rounded-xl bg-primary bg-linear-to-br from-amber-500 to-amber-700
      px-6 py-10 text-center
    "
  >
    <div className="text-3xl font-bold text-primary-foreground">
      {props.title}
    </div>

    <div className="mt-2 text-lg font-medium text-primary-foreground/80">
      {props.description}
    </div>

    <div className="mt-6">{props.buttons}</div>
  </div>
);
