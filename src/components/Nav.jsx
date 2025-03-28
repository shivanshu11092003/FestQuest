import { CaretDownOutlined } from "@ant-design/icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConfigProvider, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const NeumorphismButton = () => {
    return (
      <button
        className={`
              px-6 py-1 rounded-full 
              flex items-center gap-2 border border-gray-300
              text-teal-700 text-lg
              hover:text-teal-700
              hover:bg-gray-100 
          `}
      >
        <span>Login</span>
      </button>
    );
  };
  const items = [
    {
      key: "1",
      label: <Link to="register">Participant</Link>,
    },
    {
      key: "2",
      label: <Link to="orgregister">Organisation</Link>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <Disclosure as="nav" className="bg-white/80 backdrop-blur-sm mb-2">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400
               hover:bg-primary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center transition-all hover:scale-103">
                <img
                  src="src/assets/festLogo.png"
                  className="h-12"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="sm:flex items-center gap-3 hidden">
                <Link to="login">
                  <div className="flex items-center justify-center">
                    <NeumorphismButton />
                  </div>
                </Link>

                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomRight"
                    >
                      <button className="px-4 py-2 text-[#00637C] border hover:bg-gray-100 rounded-full">
                        {" "}
                        Sign Up <CaretDownOutlined />
                      </button>
                    </Dropdown>
                  </Space>
                </Space>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="flex justify-center gap-4 px-2 pt-2 pb-3">
            <Link to="login">
              <div>
                <NeumorphismButton />
              </div>
            </Link>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <button className="px-4 py-2 text-[#00637C] text-lg hover:bg-gray-100 rounded-full">
                    {" "}
                    Sign Up <CaretDownOutlined />
                  </button>
                </Dropdown>
              </Space>
            </Space>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </ConfigProvider>
  );
}
