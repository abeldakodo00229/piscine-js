function split(str, sp) {
    let Tab = []
    if (sp === null) {
        sp = ",";
    }

    if (sp === "") {
        for (var i = 0; i < str.length; i++) {
            Tab.push(str[i]);
        }
        return Tab;
    }
    var end = str.indexOf(sp);
    while (end > -1) {
        end = str.indexOf(sp);
        if (end === -1) {
            break;
        }
        Tab.push(str.slice(0, end));
        str = str.slice(end + sp.length);
    }
    Tab.push(str);
    return Tab;

}

function join(str, sp) {
    let Tab = ""

    if (typeof sp === 'undefined') {
        for (let j = 0; j < str.length; j++) {
            if (j !== str.length - 1) {
                Tab += str[j] + ","
            } else {
                Tab += str[j]
            }


        }
    } else if (sp === '') {
        for (let j = 0; j < str.length; j++) {
            Tab += str[j]

        }
    } else {

        for (let j = 0; j < str.length; j++) {
            if (j !== str.length - 1) {
                Tab += str[j] + sp
            } else {
                Tab += str[j]
            }


        }

    }
    return Tab
}