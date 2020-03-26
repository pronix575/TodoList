const areYouShureToDelete = new View(
    `.todos-view`,

    `
        <div class="areYouShureToDelete flex">
            <div class="areYouShureForm">
                <h3>Delete this todo item?</h3>
                
                <div class="flex">
                    <div class="areYouShureFormYesBtn flex">yes</div>
                    <div class="areYouShureFormNoBtn flex">no</div>
                </div>
            </div>
        </div>
    `,

    `areYouShureToDelete`
)