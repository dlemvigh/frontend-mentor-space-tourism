# Space Tourism

A marketing site for a fictional space-tourism company. All content is authored in a (pretend) headless CMS and rendered statically.

## Site structure

**Section**:
One of the four top-level areas of the site: Home, Destination, Crew, Technology.
_Avoid_: Page (ambiguous with route and Figma frame), tab, area

**Entry Switcher**:
The control that moves between the Entries within a Section. It appears as text labels (Destination), dots (Crew) or numbers (Technology).
_Avoid_: Tabs, pagination, carousel

## Content

**Entry**:
A single CMS record of one content type: a Destination, Crew Member or Technology.
_Avoid_: Item, record, page

**Slug**:
The URL-safe identifier of an Entry, unique within its content type.
_Avoid_: ID, key, handle

**Destination**:
A place a tourist can travel to, such as the Moon, Mars, Europa or Titan.
_Avoid_: Planet (most Destinations aren't planets), location

**Crew Member**:
A person in the company's crew, with a name, role and bio. "Crew" means the whole group.
_Avoid_: Crew (for an individual), astronaut, person

**Technology**:
A piece of technology featured by the company, such as a launch vehicle, spaceport or space capsule. An Entry owns both its landscape and portrait images; choosing between them is a layout concern.
_Avoid_: Vehicle (a spaceport isn't one), tech
