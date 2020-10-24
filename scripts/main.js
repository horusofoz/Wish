// Menu Elements
var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_oracle = document.getElementById("button_menu_oracle");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_wilderness = document.getElementById("button_menu_wilderness");
var button_menu_combat = document.getElementById("button_menu_combat");
var button_menu_about = document.getElementById("button_menu_about");


// Sidebars
var div_sidebar_journal = document.getElementById("div_sidebar_journal");
var div_sidebar_oracle = document.getElementById("div_sidebar_oracle");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_wilderness = document.getElementById("div_sidebar_wilderness");
var div_sidebar_combat = document.getElementById("div_sidebar_combat");
var div_sidebar_about = document.getElementById("div_sidebar_about");


// Shared Elements
var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");
var div_active_sidebar = document.getElementById("div_active_sidebar");
var div_hidden_sidebars = document.getElementById("div_hidden_sidebars");


// Journal Elements
var button_journal_append = document.getElementById("button_journal_append");
var button_feature_journal_write = document.getElementById("button_feature_journal_write");
var button_journal_entry_erase = document.getElementById("button_journal_entry_erase");
var button_feature_journal_read = document.getElementById("button_feature_journal_read");
var button_journal_undo = document.getElementById("button_journal_undo");
var button_journal_copy = document.getElementById("button_journal_copy");
var button_journal_clear = document.getElementById("button_journal_clear");

var div_feature_journal_write = document.getElementById("div_feature_journal_write");
var div_feature_journal_read = document.getElementById("div_feature_journal_read");
var div_journal_log = document.getElementById("div_journal_log");

var input_journal_entry_textarea = document.getElementById("input_journal_entry_textarea");


// Oracle Elements
var button_feature_question = document.getElementById("button_feature_question");
var button_feature_portent = document.getElementById("button_feature_portent");
var button_feature_event = document.getElementById("button_feature_event");
var button_ask_question = document.getElementById("button_ask_question");
var button_receive_portent = document.getElementById("button_receive_portent");
var button_initiate_event = document.getElementById("button_initiate_event");

var div_feature_question = document.getElementById("div_feature_question");
var div_feature_portent = document.getElementById("div_feature_portent");
var div_feature_event = document.getElementById("div_feature_event");

var input_oracle_question = document.getElementById("input_oracle_question");
var input_question_likelihood = document.getElementById("input_question_likelihood");
var input_portent_number = document.getElementById("input_portent_number");


// Dungeon Elements
var button_feature_dungeon_design = document.getElementById("button_feature_dungeon_design");
var button_feature_dungeon_room = document.getElementById("button_feature_dungeon_room");
var button_feature_dungeon_passage = document.getElementById("button_feature_dungeon_passage");
var button_feature_dungeon_door = document.getElementById("button_feature_dungeon_door");

var div_feature_dungeon_design = document.getElementById("div_feature_dungeon_design");
var div_feature_dungeon_room = document.getElementById("div_feature_dungeon_room");
var div_feature_dungeon_passage = document.getElementById("div_feature_dungeon_passage");
var div_feature_dungeon_door = document.getElementById("div_feature_dungeon_door");
var div_feature_dungeon_trap = document.getElementById("div_feature_dungeon_trap");

var button_generate_dungeon = document.getElementById("button_generate_dungeon");
var button_generate_door = document.getElementById("button_generate_door");
var button_generate_trap = document.getElementById("button_generate_trap");

var input_trap_tier = document.getElementById("input_trap_tier");
var input_trap_severity = document.getElementById("input_trap_severity");
var input_trap_magic_or_mundane = document.getElementById("input_trap_magic_or_mundane");


// Wilderness Elements
var button_feature_wilderness_terrain = document.getElementById("button_feature_wilderness_terrain");
var button_feature_wilderness_feature = document.getElementById("button_feature_wilderness_feature");
var button_feature_wilderness_encounter = document.getElementById("button_feature_wilderness_encounter");
var button_feature_wilderness_complication = document.getElementById("button_feature_wilderness_complication");

var div_feature_wilderness_terrain = document.getElementById("div_feature_wilderness_terrain");
var div_feature_wilderness_feature = document.getElementById("div_feature_wilderness_feature");
var div_feature_wilderness_encounter = document.getElementById("div_feature_wilderness_encounter");
var div_feature_wilderness_complication = document.getElementById("div_feature_wilderness_complication");


// Combat Elements
var button_feature_combat_difficulty = document.getElementById("button_feature_combat_difficulty");
var button_feature_combat_intention = document.getElementById("button_feature_combat_intention");
var button_feature_combat_reaction = document.getElementById("button_feature_combat_reaction");
var button_feature_combat_complication = document.getElementById("button_feature_combat_complication");

var div_feature_combat_difficulty = document.getElementById("div_feature_combat_difficulty");
var div_feature_combat_feature = document.getElementById("div_feature_combat_feature");
var div_feature_combat_reaction = document.getElementById("div_feature_combat_reaction");
var div_feature_combat_complication = document.getElementById("div_feature_combat_complication");


// About Elements
var button_feature_about_settings = document.getElementById("button_feature_about_settings");
var button_feature_about_general = document.getElementById("button_feature_about_general");
var button_feature_about_journal = document.getElementById("button_feature_about_journal");
var button_feature_about_oracle = document.getElementById("button_feature_about_oracle");
var button_feature_about_dungeon = document.getElementById("button_feature_about_dungeon");
var button_feature_about_wilderness = document.getElementById("button_feature_about_wilderness");
var button_feature_about_combat = document.getElementById("button_feature_about_combat");

var div_feature_about_settings = document.getElementById("div_feature_about_settings");
var div_feature_about_general = document.getElementById("div_feature_about_general");
var div_feature_about_journal = document.getElementById("div_feature_about_journal");
var div_feature_about_oracle = document.getElementById("div_feature_about_oracle");
var div_feature_about_dungeon = document.getElementById("div_feature_about_dungeon");
var div_feature_about_wilderness = document.getElementById("div_feature_about_wilderness");
var div_feature_about_combat = document.getElementById("div_feature_about_combat");



// Menu Navigation
button_menu_journal.onclick = function () {
    showFeatureSetSidebar(div_sidebar_journal);
    applyActiveStyleToMenuButton(this);
};

button_menu_oracle.onclick = function () {
    showFeatureSetSidebar(div_sidebar_oracle);
    applyActiveStyleToMenuButton(this);
};

button_menu_dungeon.onclick = function () {
    showFeatureSetSidebar(div_sidebar_dungeon);
    applyActiveStyleToMenuButton(this);
};

button_menu_wilderness.onclick = function () {
    showFeatureSetSidebar(div_sidebar_wilderness);
    applyActiveStyleToMenuButton(this);
};

button_menu_combat.onclick = function () {
    showFeatureSetSidebar(div_sidebar_combat);
    applyActiveStyleToMenuButton(this);
};

button_menu_about.onclick = function () {
    showFeatureSetSidebar(div_sidebar_about);
    applyActiveStyleToMenuButton(this);
};


// Shared Functions
function showFeatureDiv(divName) {

    // move active feature to div_hidden_features
    div_hidden_features.appendChild(div_active_feature.firstElementChild);

    // move selected feature to div_active_feature
    div_active_feature.appendChild(divName);
}

function showFeatureSetSidebar(divName) {

    // move active feature to div_hidden_features
    div_hidden_sidebars.appendChild(div_active_sidebar.firstElementChild);

    // move selected feature to div_active_feature
    div_active_sidebar.appendChild(divName);

    // click first sidebar button of active sidebar
    div_active_sidebar.firstElementChild.firstElementChild.click();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function writeToJournal(journalEntry) {
    var result_node = document.createElement('p');
    result_node.innerHTML = journalEntry;
    div_journal_log.appendChild(result_node);
    div_journal_log.scrollTop = div_journal_log.scrollHeight;
}

function applyActiveStyleToMenuButton(activeMenuButton) {

    var menuButtons = activeMenuButton.parentElement.children;

    Object.keys(menuButtons).forEach(button => {
        menuButtons[button].classList.remove("active_button");
    });

    activeMenuButton.classList.add("active_button");
}

function applyActiveStyleToFeatureButton(activeFeatureButton) {

    var featureButtons = activeFeatureButton.parentElement.children;

    Object.keys(featureButtons).forEach(button => {
        featureButtons[button].classList.remove("active_button");
    });

    activeFeatureButton.classList.add("active_button");
}

function capitalize (inputString) {
    if(typeof inputString !== 'string') {
        return "";
    }
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function rollDiceForumla(diceCount, diceType, modifier) {
    var result = 0;
    for (var i = 0; i <= diceCount; i++) {
        result += getRandomInt(1, diceType);
    }
    result += modifier;
    return result;
}