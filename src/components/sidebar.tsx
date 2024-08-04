import React from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const SideBar = () => {
  return (
    <div>
      <div className="fixed left-0 top-16 xl:block lg:hidden md:hidden sm:block hidden h-full border-2 border-black ">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Ocorrências ativas
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Locais de ajuda
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiUser}>
                Conta
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sair
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentação
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                Ajuda
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;

/**
 *
 */
