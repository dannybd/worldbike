# Worldbike

Worldbike is a project dedicated to connecting an exercise bike with Google
Street View to allow users to bike around their destinations of choice.

The plan is to combine several technologies:

- A MakeyMakey board attached to an exercise bike, to provide inputs from the 
bike. The board allows closed circuits to act as keystrokes on a laptop.

- A full-screen Google Maps JavaScript API v3 Street View container, which is
the primary visual component.

- Google Web Speech API provides speech recognition so users can choose an
address with their voice.

Together, the user is able to mount the bike, and press a button to begin
voice recognition. The user speaks an address, which is geocoded to LatLong
coordinates. When the user stops speaking, the map repositions at the address
specified, and the user's motion on the bike allows them to ride around their
destination of choice.

======

You can view a live demo [here](http://dbd.mit.edu/worldbike/).