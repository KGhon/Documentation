export const testCode: string =
`void UEditorUtilityWidgetSubclass::NativeConstruct()
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
}`;