javascript:(() => {
    function runEasyLevelScript() {
        console.log("########## Easy Level ##########");

        // 1. Find all images on the page
        const allImages = document.querySelectorAll('img');
        console.log("==>1.Find all images on the page:", allImages.length > 0 ? `=> ${allImages.length} images are found` : '=> Images not found');

        // 2. Find images that are icons
        const iconImages = Array.from(allImages).filter((image) => image.src.includes('icon'));
        console.log("==>2.Find images that are icons:", iconImages.length > 0 ? `=> ${iconImages.length} icon images are found` : '=> Icon images not found');

        // 3. Find all button elements
        const buttons = document.querySelectorAll('button');
        console.log("==>3.Find all button elements:", buttons.length > 0 ? `=> ${buttons.length} buttons are found` : '=> Buttons not found');

        // 4. Find all input fields
        const inputFields = document.querySelectorAll('input');
        console.log("==>4.Find all input fields:", inputFields.length > 0 ? `=> ${inputFields.length} input field is found` : '=> Input fields not found');

        // 5. Find link to the map for eco-bags
        console.log("==>5.Find link to the map for eco-bags:");
        const ecoBagsLink_ver1 = Array.from(document.querySelectorAll("a")).filter(a => a.textContent.includes('buy eco-bags'));
        console.log(ecoBagsLink_ver1.length > 0 ? `-ecoBagsLink_ver1:\n ${ecoBagsLink_ver1[0].outerHTML}` : "=> ecoBagsLink_ver1 not found");

        const ecoBagsLink_ver2 = document.evaluate("//img[contains(@src, 'pic-bag')]/ancestor::div[@class='stat-row']//a", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const ecoBagsLinkVer2Result = ecoBagsLink_ver2.snapshotLength > 0 ? ecoBagsLink_ver2.snapshotItem(0) : null;
        console.log(ecoBagsLinkVer2Result ? `-ecoBagsLink_ver2:\n ${ecoBagsLinkVer2Result.outerHTML}` : "=> ecoBagsLink_ver2 not found");

        const ecoBagsLink_ver3 = document.querySelector("img[src*='pic-bag']");
        const ecoBagsLinkVer3Result = ecoBagsLink_ver3 ? ecoBagsLink_ver3.closest('div.stat-row').querySelector('a') : null;
        console.log(ecoBagsLinkVer3Result ? `-ecoBagsLink_ver3:\n ${ecoBagsLinkVer3Result.outerHTML}` : "=> ecoBagsLink_ver3 not found");

        console.log("__________Easy Level - FINISHED__________");
    }

    function runMediumLevelScript() {
        console.log("########## Medium Level ##########");

        // Task 1: Search images > 300 pixels.
        console.log("==>1.Images > 300 pixels:");
        const allImages = document.querySelectorAll('img');
        let imagesCounter = 0;
        allImages.forEach(img => {
            if (img.height > 300) {
                console.log("-img with height:", img.height, img);
                imagesCounter++;
            }
        });
        console.log(`Total images taller than 300px: ${imagesCounter}`);
        console.log('-----------------------------------------');

        // Task 2: number of unique colors
        const elements = document.querySelectorAll('*');
        const uniqueColorsSet = new Set();
        elements.forEach(el => {
            const color = window.getComputedStyle(el).color;
            uniqueColorsSet.add(color);
        });
        console.log(`==>2.Number of unique colors ${uniqueColorsSet.size}, the colors are:`, uniqueColorsSet);

        // Task 3: Cumulative quantity of buttons
        const buttons = document.querySelectorAll('button');
        console.log(`==>3.Quantity of buttons: ${buttons.length}`);

        // Task 4: Input field types
        console.log("==>4.Input field types:");
        const inputFields = document.querySelectorAll('input');
        inputFields.forEach(input => {
            console.log(`-input type: ${input.type}`);
        });

        // Task 5: Social media buttons + their respective destination 
        console.log("==>5.Social media buttons URLs:");
        const socialButtons = document.querySelectorAll('.footer_social-wrp a');
        socialButtons.forEach(btn => {
            console.log(`-href: ${btn.href}`);
        });

        console.log("__________Medium Level - FINISHED__________");
    }

    function runHardLevelScript() {
        console.log("########## Hard Level ##########");

        // Task 6.1 Current day
        let monthAndYear = document.querySelector('.monthAndYear');
        let day = document.querySelector('.current-day');
        console.log((day && monthAndYear) 
            ? `==>1.Current day: ${day.outerText + ' ' + monthAndYear.outerText}` 
            : "the current day is not found");

        // Task 6.2 Navigation buttons
        const navigationButtons = document.querySelectorAll(".calendar img[class*='arrow']");
        if (navigationButtons.length === 2) {
            console.log("==>2.Navigation buttons found:");
            console.log(Array.from(navigationButtons));
        } else {
            console.log("Two navigation buttons are not found");
        }

        // Task 6.3 Displayed days of the week
        const dayNames = document.querySelectorAll('.days-name');
        console.log(dayNames.length > 0
            ? "==>3.Days of the week: [" + Array.from(dayNames).map(el => el.outerText).join(" | ") + "]"
            : "No buttons were found");

        console.log("__________Hard Level - FINISHED__________");
    }

    function switchThePageAndRunScript(callback) {
        window.location.href = "https://www.greencity.cx.ua/#/profile";

        const interval = setInterval(() => {
            const element = document.querySelector('.days-name');
            if (element) {
                clearInterval(interval);
                callback();
            }
        }, 100);
    }

    runEasyLevelScript();
    runMediumLevelScript();
    switchThePageAndRunScript(runHardLevelScript);
})();