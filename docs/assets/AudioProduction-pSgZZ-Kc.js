import"./CustomElements-TNG10mvk.js";var e={pages:[[`Audio Production`,``,!1,!0],[`GUI Toolkit`,`AudioProduction`,!0,!1]]},t=`void UEditorUtilityWidgetSubclass::NativeConstruct()
{
	//Pass the PIE world if the widget is already open in the editor
	FWorldDelegates::OnPreWorldInitialization.AddUObject(this, &UKEditorUtilityWidget::BeginPIE);
	FEditorDelegates::PrePIEEnded.AddUObject(this, &UKEditorUtilityWidget::OnEndPIE);

	//Get the PIE world if the widget is opened in the editor during PIE
	if (GEditor->PlayWorld)
	{
		BeginPIE(GEditor->PlayWorld, FWorldInitializationValues());
	}

	Super::NativeConstruct();
}


void UEditorUtilityWidgetSubclass::NativeDestruct()
{
	FWorldDelegates::OnPreWorldInitialization.RemoveAll(this);
	FEditorDelegates::PrePIEEnded.RemoveAll(this);

	Super::NativeDestruct();
}


void UKEditorUtilityWidgetSubclass::BeginPIE(UWorld* world, FWorldInitializationValues worldValues)
{
	//Pass the world to child widgets that will call SpawnDebugActor() using Blueprint
	OnBeginPIE(world);
}`,n=document.createElement(`div`,{is:`doc-page`});n.PopulateNavigation(e.pages),document.body.appendChild(n);var r=document.createElement(`div`),i=document.createElement(`label`);i.textContent=`GUI TOOLKIT`,r.appendChild(i);var a=document.createElement(`div`,{is:`code-block`});a.Configure(t,`cpp`,!1),r.appendChild(a);var o=document.createElement(`table`,{is:`table-element`});o.Configure([[`function one`,`description one`],[`function two`,`description two`],[`function three`,`description three`],[`function four`,`description four`],[`function five`,`description five`]]),r.appendChild(o),n.AddContentPage(`GUI Toolkit`,r);