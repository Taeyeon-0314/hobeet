interface TabBarProps {
  activeTab: boolean;
  onTabChange: (newActiveTab: boolean) => void;
  value: string;
}

// 승인 페이지 탭바
export const ApproveMemberTabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange, value }) => {
  const getTabText = (tabType: boolean) => {
    if (value === "egges") {
      return tabType ? "전체 에그즈" : "승인 대기";
    } // else if (value === "mychat") {
    //   return tabType ? "에그클럽" : "에그팝";
    // }

    if (value === "eggday") {
      return tabType ? "홈" : "에그데이";
    }
    return "";
  };

  return (
    <div className="w-full px-4 pt-2.5 border-b border-gray-50 flex">
      <button className="w-[50%] text-base font-medium font-pretendard relative" onClick={() => onTabChange(true)}>
        <span
          className={`text-center text-base font-pretendard relative ${
            activeTab === true ? "text-gray-900 text-body-16" : "text-gray-300 font-pretendard"
          }`}
        >
          {getTabText(true)}
        </span>
        <div className={`left-0 w-full h-0.5 mt-3 ${activeTab === true ? "bg-gray-800" : "bg-gray-50"}`} />
      </button>

      <button className="w-[50%] text-base font-medium font-pretendard relative" onClick={() => onTabChange(false)}>
        <span
          className={`text-center text-base font-pretendard relative ${
            activeTab === false ? "text-gray-900 text-body-16" : "text-gray-300 font-pretendard"
          }`}
        >
          {getTabText(false)}
        </span>
        <div className={`left-0 w-full h-0.5 mt-3 ${activeTab === false ? "bg-gray-800" : "bg-gray-50"}`} />
      </button>
    </div>
  );
};

export default ApproveMemberTabBar;
