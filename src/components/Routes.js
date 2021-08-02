import React from "react";
import * as R from "ramda";
import { Link, RouteProps, useLocation } from "react-router-dom";
import { ChevronDown } from "react-feather";
import { Collapsible } from "@wigxel/react-components/lib/lists";

// type NavLink = {
//   title: string;
//   icon: string;
//   children?: NavLink[];
//   path: string;
// };

const simpleSlug = R.compose(
  R.join(""),
  R.prepend("/"),
  R.join("-"),
  R.split(" "),
  R.toLower
);

const link = (title, iconName, children) => ({
  title: title,
  icon: !!iconName ? require("../assets/icons/" + iconName + "-icon.svg") : "",
  children: children,
  path: simpleSlug(title),
});

const routes = [
  link("Home", "home"),
  link("Loan", "loan"),
  link("Category Settings", "category"),
  link("Management", "", [
    link("Channel", "channel"),
    link("Collection", "collection"),
    link("Broadcaster", "broadcaster"),
    link("Affiliates", "affiliates"),
    link("Dispute", "dispute"),
    link("Withdrawal", "withdrawal"),
    link("Staffs", "staffs"),
    link("Promos", "promos"),
  ]),
  link("Support", "support"),
  link("Users", "users"),
  link("Purchase History", "purchase"),
  link("Transactions Logs", "transaction"),
  link("Settings", "settings"),
];

// type RenderLinkProp = {
//   link: NavLink,
//   className: string,
// };

const usePermissions = () => {
  // const authContext = React.useContext(AuthContext);
  // const permissions = authContext?.user.user.permissions;
  // const superUser = authContext?.user.user.email;

  const Generic = ["Management", "Home"];

  const p = {
    Category: ["Category Settings"],
    Loan: ["Loan"],
    Management: ["Channel"],
    Purchase: ["Purchase History"],
    Transaction: ["Transactions Logs"],
    Users: ["Users"],
    Staff: ["Staffs"],
    Promos: ["Promos"],
    Affiliates: ["Affiliates"],
    Dispute: ["Dispute"],
    Broadcaster: ["Broadcaster"],
    Collection: ["Collection"],
    Withdrawal: ["Withdrawal"],
    Support: ["Support"],
    Settings: ["Settings"],
  };

  return {
    isPermitted: ({ title }) => {
      if (Generic.includes(title)) return true;

      // if (superUser === "alisidaniel@gmail.com") {
      //   return true;
      // } else {
      //   for (const perm of permissions) {
      //     console.log(perm, p[perm], title);
      //     if (p[perm]?.includes(title)) {
      //       return true;
      //     }
      //   }
      // }
      return false;
    },
  };
};

const RenderLink = ({ link, className }) => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const isActive = R.equals(pathname, link.path);
  const { isPermitted } = usePermissions();

  const childIndex = link.children?.findIndex(R.propEq("path", pathname));
  const childIsCurrentLink = R.complement(R.includes)(childIndex, [
    -1,
    undefined,
    null,
  ]);

  // console.log("Child is a link > ", {
  //   title: link.title,
  //   childIndex,
  //   childIsCurrentLink,
  // });

  React.useEffect(() => {
    if (childIsCurrentLink) setOpen(true);
  }, [childIsCurrentLink, setOpen]);

  return (
    <div className="block w-full">
      <div
        className={`flex justify-between items-center ${className || ""} ${
          (isActive || childIsCurrentLink) && "font-bold"
        }`}
      >
        <li className="inline-flex items-center font-sans md:text-sm">
          <img
            src={link.icon}
            alt={link.title[0]}
            className="mr-4 w-6 h-6 object-contain"
          />
          {link.children ? (
            link.title
          ) : (
            <Link to={`/dashboard${link.path}`}>{link.title}</Link>
          )}
        </li>
        {link.children && (
          <button
            className={`transform duration-100 ease-in ${
              open ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(!open)}
          >
            <ChevronDown />
          </button>
        )}
      </div>
      {link.children && (
        <Collapsible open={open}>
          <div className="pl-8 border-left">
            {link.children.filter(isPermitted).map((e) => (
              <RenderLink
                key={e.title}
                link={e}
                className="text-sm border-l border-white pl-4 py-2"
              />
            ))}
          </div>
        </Collapsible>
      )}
    </div>
  );
};

const Routes = () => {
  const { isPermitted } = usePermissions();

  return (
    <nav className="px-4">
      {routes.filter(isPermitted).map((e) => (
        <RenderLink key={e.title} link={e} className="py-4 text-black" />
      ))}
    </nav>
  );
};

export default Routes;
