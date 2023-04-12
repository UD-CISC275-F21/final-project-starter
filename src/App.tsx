import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./Components/Settings";
import { MainHeader } from "./Layout/MainHeader";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { MyListsPage } from "./Pages/MyListsPage";
import { NotFound } from "./Pages/NotFound";

type Role = "Default" | "Admin" | "Super";

function App(): JSX.Element {
    const [settingsIsShown, setSettingsIsShown] = useState<boolean>(false);
    const [role, setRole] = useState<Role>("Default");

    const showSettingsHandler = (): void => {
        setSettingsIsShown(true);
    };

    const hideSettingsHandler = (): void => {
        setSettingsIsShown(false);
    };

    return (
        <div>
            <MainHeader showSettingsHandler={showSettingsHandler} role={role} />

            {settingsIsShown /* eslint-disable-line */ && (
                <Settings
                    hideSettingsHandler={hideSettingsHandler}
                    role={role}
                    setRole={setRole}
                />
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/mylists" element={<MyListsPage />} />
                <Route
                    path="/addMedia"
                    element={<AddMediaPage role={role} />}
                />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
