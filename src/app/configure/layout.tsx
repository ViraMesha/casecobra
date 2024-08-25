import { MaxWidthWrapper, Steps } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
