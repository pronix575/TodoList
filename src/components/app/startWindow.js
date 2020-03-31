const startWindow = new View(
    '.app',

    `
        <div class="startWinodw flex">
            <div style="max-width: 150px;margin: 0; padding: 0; font-weight: bold; font-size: 25px; width: 100%">
                <i class="fa fa-circle-o-notch fa-spin" style="margin: 0 10px 0 0"></i>Todo<span style="color: var(--main-block-background)">List</span>
            </div>

            <div style="position: fixed; flex-direction: column; height: 100vh" class="flex">
                <div></div>
                <div style="margin: 15px" class="flex"><span style="color: #868686" class="flex"><span>version 1.0.0</span> <span style="font-weight: normal; border: 1px solid var(--main-block-background); padding: 3px 5px; font-size: 9px; margin: 0 0 0 5px; border-radius: 4px">Beta</span></span></div>
            </div>
        </div>
    `,

    'startWinodw'
)