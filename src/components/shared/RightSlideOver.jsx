import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RightSlideOver({ open, setOpen }) {
  const id = localStorage.getItem("userId");

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    !id && { name: "Login", href: "/login", display: true },
    id && { name: "Profile", href: `/profile/${id}` },
    id && { name: "Bookings", href: `/profile/attendedevents` },
  ];

  const { pathname } = useLocation();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav
                        className="flex flex-1 flex-col h-full justify-between"
                        aria-label="Sidebar"
                      >
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => {
                            const isActive = pathname === item?.href;

                            return (
                              item && (
                                <li
                                  key={item?.name}
                                  className={` ${item?.display && "none"} `}
                                >
                                  <a
                                    href={item?.href}
                                    className={classNames(
                                      isActive
                                        ? "bg-gray-50 text-primary-600"
                                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50",
                                      "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold"
                                    )}
                                  >
                                    {item?.name}
                                  </a>
                                </li>
                              )
                            );
                          })}
                        </ul>
                        {id && (
                          <button className="bg-gray-50 text-primary-500 rounded-md p-2 pl-3 text-sm leading-6 font-semibold">
                            Logout
                          </button>
                        )}
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
